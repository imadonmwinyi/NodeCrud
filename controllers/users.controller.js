// import user model

exports.getUser = (req, res, next) => {
    // user.find
    res.status(200).json({
        user: "my name is test"
    })
}
