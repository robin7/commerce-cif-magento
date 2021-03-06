/*******************************************************************************
 *
 *    Copyright 2018 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/

'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const HttpStatus = require('http-status-codes');
const setup = require('../lib/setupIT.js').setup;
const requiredFields = require('../lib/requiredFields');

const expect = chai.expect;

chai.use(chaiHttp);


describe('magento getCart', function() {

    describe('Integration tests', function() {

        // Get environment
        let env = setup();

        // Increase test timeout
        this.slow(env.slow);
        this.timeout(env.timeout);

        let cartId;
        const productVariantId = env.PRODUCT_VARIANT_EQBISUMAS_10;

        /** Create cart. */
        before(function() {
            return chai.request(env.openwhiskEndpoint)
                .post(env.cartsPackage + 'postCart')
                .query({
                    quantity: 2,
                    productVariantId: productVariantId
                })
                .then(function (res) {
                    expect(res).to.be.json;
                    expect(res).to.have.status(HttpStatus.CREATED);
                    expect(res.body.id).to.not.be.empty;

                    // Store cart id
                    cartId = res.body.id;
                });
        });

        it('returns a cart for a valid cart id', function() {
            return chai.request(env.openwhiskEndpoint)
                .get(env.cartsPackage + 'getCart')
                .set('Cache-Control', 'no-cache')
                .query({id: cartId})
                .then(function (res) {
                    expect(res).to.be.json;
                    expect(res).to.have.status(HttpStatus.OK);

                    // Verify structure
                    requiredFields.verifyCart(res.body);
                    expect(res.body).to.have.own.property('lastModifiedAt');
                    //TODO update when TOTAL is added
                    expect(res.body.id).to.equal(cartId);
                    expect(res.body).to.have.own.property('createdAt');
                    expect(res.body.entries).to.have.lengthOf(1);

                    const entry = res.body.entries[0];
                    expect(entry.quantity).to.equal(2);
                    expect(entry.productVariant).to.have.own.property('id');
                    expect(entry.productVariant.sku).to.equal(productVariantId);
                });
        });
        
        it('returns a 400 error for a missing id parameter', function() {
            return chai.request(env.openwhiskEndpoint)
                .get(env.cartsPackage + 'getCart')
                .set('Cache-Control', 'no-cache')
                .then(function(res) {
                    expect(res).to.have.status(HttpStatus.BAD_REQUEST);
                    expect(res).to.be.json;
                    requiredFields.verifyErrorResponse(res.body);
                });
        });

        it('returns a 404 error for a non existent cart', function() {
            return chai.request(env.openwhiskEndpoint)
                .get(env.cartsPackage + 'getCart')
                .set('Cache-Control', 'no-cache')
                .query({id: 'does-not-exist'})
                .then(function(res) {
                    expect(res).to.have.status(HttpStatus.NOT_FOUND);
                    expect(res).to.be.json;
                    requiredFields.verifyErrorResponse(res.body);
                });
        });
        
    });
});
