const validateStudent = (req, res, next) => {
    const { name, course, age } = req.body;
    if (!name || !course || !age) {
        return res.status(400).send('Missing required fields');
    }
    next();
};
module.exports = validateStudent;