const { check, validationResult } = require("express-validator");

exports.Login = [
  check("username")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນຊື່")
    .not()
    .isNumeric()
    .withMessage("ຊື່ຜູ້ໃຊ້ຕ້ອງເປັນຕົວອັກສອນເທົ່ານັ້ນ")
    .isLength({ min: 3, max: 30 })
    .withMessage("ຊື່ຕ້ອງມີປະກອບດວ້ຍດ້ວຍຕົວອັກສອນ 3 ຫາ 20"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ລະຫັດຜ່ານ")
    .isLength({ min: 8, max: 30 })
    .withMessage("ລະຫັດຜ່ານຕ້ອງປະກອບດວ້ຍຕົວອັກສອນ 8 ຂຶ້ນໄປ"),
];
exports.Register = [
  check("username")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນຊື່")
    .not()
    .isNumeric()
    .withMessage("ຊື່ຜູ້ໃຊ້ຕ້ອງເປັນຕົວອັກສອນເທົ່ານັ້ນ")
    .isLength({ min: 3, max: 30 })
    .withMessage("ຊື່ຕ້ອງມີປະກອບດວ້ຍດ້ວຍຕົວອັກສອນ 3 ຫາ 20"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("ກະລຸນາປ້ອນ ລະຫັດຜ່ານ")
    .isLength({ min: 8, max: 30 })
    .withMessage("ລະຫັດຜ່ານຕ້ອງປະກອບດວ້ຍຕົວອັກສອນ 8 ຂຶ້ນໄປ"),

  check("confirm_password")
    .trim()
    .custom((value, { req }) => {
      if (value != req.body.password) {
        throw new Error("ລະຫັດຜ່ານບໍ່ກົງກັນ");
      }
      return true;
    }),
];

// ================================
exports.Check = (req, res, next) => {
  const result = validationResult(req).array();
  if (result.length > 0) {
    const error = result[0].msg;
    res.status(400).json({ success: false, msg: error });
  } else {
    return next();
  }
};
