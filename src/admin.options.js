/*const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const  AdminCompany  = require('./companis/company.admin');

const options = {

    resources : [AdminCompany],    

}

module.exports = options;*/


const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const AdminCompany = require('./companis/company.admin');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [AdminCompany],
};

module.exports = options;