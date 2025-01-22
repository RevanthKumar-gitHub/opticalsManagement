const { asyncHandler } = require("../utils/asyncHandler");
const frameModel = require("../models/frames");

exports.addOrUpdateMaterialTypes = asyncHandler(async (req, res, next) => {
  const { materialCode = "", materialType } = req.body;
  if (!materialType) {
    res.statusCode = 400;
    throw new Error("Provide mandatory fields");
  }
  res.statusCode = 400;
  const response = await frameModel.addOrUpdateMaterialType({
    materialCode,
    materialType,
  });
  if (response) {
    res.status(201).json({
      success: true,
      message: "Material Type Added",
    });
    return;
  }
  res.statusCode = 400;
  throw new Error("Please Try agian!");
});

exports.addOrUpdateModelType = asyncHandler(async (req, res, next) => {
  const { modelCode = "", modelType } = req.body;
  if (!modelType) {
    res.statusCode = 400;
    throw new Error("Provide mandatory fields");
  }
  res.statusCode = 400;
  const response = await frameModel.addOrUpdateModelType({
    modelCode,
    modelType,
  });
  if (response) {
    res.status(201).json({
      success: true,
      message: "Model Type Added",
    });
    return;
  }
  res.statusCode = 400;
  throw new Error("Please Try agian!");
});

exports.addOrUpdateSize = asyncHandler(async (req, res, next) => {
  const { sizeCode = "", size } = req.body;
  if (!size) {
    res.statusCode = 400;
    throw new Error("Provide mandatory fields");
  }
  res.statusCode = 400;
  const response = await frameModel.addOrUpdateSize({
    sizeCode,
    size,
  });
  if (response) {
    res.status(201).json({
      success: true,
      message: "Frame size Added",
    });
    return;
  }
  res.statusCode = 400;
  throw new Error("Please Try agian!");
});

exports.addOrUpdateCompany = asyncHandler(async (req, res, next) => {
  const { companyCode = "", companyName } = req.body;
  if (!companyName) {
    res.statusCode = 400;
    throw new Error("Provide mandatory fields");
  }
  res.statusCode = 400;
  const response = await frameModel.addOrUpdateCompany({
    companyCode,
    companyName,
  });
  if (response) {
    res.status(201).json({
      success: true,
      message: "Frame company Added",
    });
    return;
  }
  res.statusCode = 400;
  throw new Error("Please Try agian!");
});

const addPriceDetails = async (priceDetails) => {
  const { purchasePrice, salesPrice, discount = 0 } = priceDetails;
  if (!purchasePrice || !salesPrice) {
    res.statusCode = 400;
    throw new Error("Provide mandatory price fields");
  }
  const response = await frameModel.addFramePrices({
    purchasePrice,
    salesPrice,
    discount,
  });
  if (response.length > 0) {
    return response[0].id;
  }
  res.statusCode = 400;
  throw new Error("Please Try agian!");
};

const addFrameReferenceIds = async (referenceDetails) => {
  const { frameCompanyId, frameMaterialId, frameModelId, sizeId, priceId } =
    referenceDetails;
  if ((!frameCompanyId, !frameMaterialId, !frameModelId, !sizeId, !priceId)) {
    throw new Error("Provide needed information");
  }
  const results = await frameModel.addOrUpdateFrameDetailsReferences(
    referenceDetails
  );
  if (results.length > 0) {
    return results[0].id;
  }
  throw new Error("Cannot add frame details try again");
};

exports.getFrameSubDetailsByProperty = asyncHandler(async (req, res, next) => {
  const { property, id } = req.query;

  if (!property) {
    res.statusCode = 400;
    throw new Error("Provide required params");
  }

  const results = await frameModel.getFrameSubDetailsByProperty(property, id);
  if (results) {
    return res.status(200).json({
      success: true,
      data: results,
    });
  }

  res.statusCode = 500;
  throw new Error("Error at fetching frame property details");
});

let today = new Date();

exports.addOrUpdateFrameDetails = asyncHandler(async (req, res, next) => {
  const {
    frameName,
    frameCompanyDetails,
    frameMaterialDetails,
    frameModelDetails,
    sizeDetails,
    priceDetails,
    extraDetails = "",
    purchaseDate = today,
    qty,
  } = req.body;

  if (
    !frameName ||
    !frameCompanyDetails ||
    !frameMaterialDetails ||
    !frameModelDetails ||
    !sizeDetails ||
    !priceDetails ||
    !qty
  ) {
    throw new Error("Provide mandatory fields");
  }
  if (
    !Object.keys(frameMaterialDetails).includes("id") ||
    !Object.keys(frameModelDetails).includes("id") ||
    !Object.keys(frameCompanyDetails).includes("id") ||
    !Object.keys(sizeDetails).includes("id")
  ) {
    throw new Error("Provide sufficient information");
  }

  //add price details
  const framePriceId = await addPriceDetails(priceDetails);

  const referenceDetails = {
    frameCompanyId: frameCompanyDetails.id,
    frameMaterialId: frameMaterialDetails.id,
    frameModelId: frameModelDetails.id,
    sizeId: sizeDetails.id,
    priceId: framePriceId,
  };

  const frameReferencesId = await addFrameReferenceIds(referenceDetails);

  const frameDetailsBody = {
    frameName,
    frameReferencesId,
    extraDetails,
    purchaseDate,
    qty,
  };

  //add frame details
  const frameDetailsResult = await frameModel.addOrUpdateFrameDetails(
    frameDetailsBody
  );
  if (frameDetailsResult) {
    return res.status(201).json({
      success: true,
      message: "Frame details added",
    });
  }
  throw new Error("Error adding or updating frame details");
});

exports.getFrameDetails = asyncHandler(async (req, res, next) => {
  const { frameCode  } = req.query;

  const results = await frameModel.getFrameDetails(
    frameCode
  );
  return res.status(200).json({
    success: true,
    data: results,
  });
});
