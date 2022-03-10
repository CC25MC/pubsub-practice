const { Bank, Beneficiary, Client, Request, Role, User } = require('../models');

const accountNumberExists = async (number) => {
  const accountNumber = await Beneficiary.findOne({ accountNumber: number });
  if (accountNumber) {
    throw new Error(
      `El número de cuenta ${number}, ya se encuentra registrado`
    );
  }
};

const beneficiaryExistsById = async (id) => {
  const beneficiary = await Beneficiary.findById(id);
  if (!beneficiary) {
    throw new Error(`El ID ${id}, no existe`);
  }
};

const beneficiaryDocumentNumberExists = async (number) => {
  const documentNumber = await Beneficiary.findOne({ documentNumber: number });
  if (documentNumber) {
    throw new Error(
      `El número de documento ${number}, ya se encuentra registrado`
    );
  }
};

const clientExistsById = async (id) => {
  const client = await Client.findById(id);
  if (!client) {
    throw new Error(`El ID ${id}, no existe`);
  }
};

const clientDocumentNumberExists = async (number) => {
  const documentNumber = await Client.findOne({ documentNumber: number });
  if (documentNumber) {
    throw new Error(
      `El número de documento ${number}, ya se encuentra registrado`
    );
  }
};

const emailExists = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Error(`El correo ${email}, ya se encuentra registrado`);
  }
};

const requestExistsById = async (id) => {
  const request = await Request.findById(id);
  if (!request) {
    throw new Error(`El ID ${id}, no existe`);
  }
};

const userExistsById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error(`El ID ${id}, no existe`);
  }
};

const validBank = async (bank) => {
  const bankExists = await Bank.findOne({ name: bank });
  if (!bankExists) {
    throw new Error(`El banco ${bank}, no es válido`);
  }
};

const validRole = async (role) => {
  const roleExists = await Role.findOne({ name: role });
  if (!roleExists) {
    throw new Error(`El rol ${role}, no es válido`);
  }
};

module.exports = {
  accountNumberExists,
  beneficiaryExistsById,
  beneficiaryDocumentNumberExists,
  clientExistsById,
  clientDocumentNumberExists,
  emailExists,
  requestExistsById,
  userExistsById,
  validBank,
  validRole,
};
