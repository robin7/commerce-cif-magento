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

const MagentoClientBase = require('@adobe/commerce-cif-magento-common/MagentoClientBase');
const ERROR_TYPE = require('./constants').ERROR_TYPE;

/**
 * This action deletes a cart shipping method.
 * 
 * NOT AVAILABLE IN MAGENTO.
 *
 * @param   {string} args.MAGENTO_HOST              Magento hostname
 * @param   {string} args.MAGENTO_SCHEMA            optional Magento schema
 * @param   {string} args.MAGENTO_API_VERSION       optional Magento api version
 * @param   {string} args.id                        cart id;
 *
 * @return  {Promise}       error message
 */
function deleteShippingMethod(args) {
    return new MagentoClientBase(args, null, '', ERROR_TYPE).handleError({statusCode: 501});
}

module.exports.main = deleteShippingMethod;
