const express = require("express")
const route = express.Router();
const userController = require("../Controller/userController")


route.post("/registration", userController.registration)
route.post("/login", userController.Login)
route.post("/authentication", userController.Authentication)
route.post("/resetpass", userController.PassReset)
route.post("/accInfo", userController.AccInfo)
route.post("/moneytransaction", userController.MoneyTransaction)
route.post("/balancequiry", userController.BalanceQuiry)
route.post("/accStatement", userController.AccStatement)
route.post("/ministatement", userController.MiniStatement)



module.exports = route;