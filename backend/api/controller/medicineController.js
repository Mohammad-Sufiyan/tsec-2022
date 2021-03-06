var Medicine = require("../model/Medicine");

exports.addMedicine = async (req, res, next) => {
  var {
    id: care_taker_ID,
    title: medicineName,
    dateTime: medicineTime,
    dose: medicineDose,
    type,
  } = req.body;

  console.log(req.body);

  console.log("files are");
  // console.log(req.file.path);
  var addMedicine = new Medicine({
    care_taker_ID: care_taker_ID,
    medicine_name: medicineName,
    type: type,
    dose: medicineDose,
    medicine_time: medicineTime,
    dose: medicineDose,
    // img: req.file.path,
  });
  var addedMedicine = await addMedicine.save();
  res.status(200).send("Medicine added successfully");
};

exports.deleteMedicine = (req, res, next) => {
  var { medicineID } = req.body;
  var findingAndDeletingMadicine = Medicine.findOneAndDelete({
    _id: medicineID,
  });
  findingAndDeletingMadicine.exec((err, singleData) => {
    // try {
    //   fs.unlinkSync(singleData["category_img"], function (err) {
    //     console.log("file deleted successfully");
    //   });
    // } catch {
    //   console.log("This error raised from file uploader");
    // }
  });
  res.status(200).send({ catMsg: "Madicine deleted Successfully!!!" });
};

exports.fetchMedicine = async (req, res, next) => {
  const { carTakerId } = req.body;
  console.log(carTakerId);
  const result = await Medicine.find({ care_taker_ID: carTakerId });
  console.log(result);
  res.status(200).send({ status: 200, message: result });
};
