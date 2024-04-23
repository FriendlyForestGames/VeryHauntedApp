const readAccountByUuid = router.get("/:accountUuid", (req, res) => {
  //using req to pull parameters from Uuid
  const accountUuid = req.params.accountUuid;
  //using template literals to send message with Uuid interpolated
  res.send(`Retrieving account with UUID: ${accountUuid}`);
});

module.exports = {
  readAccountByUuid,
};
