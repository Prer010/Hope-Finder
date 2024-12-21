const router = require('express').Router();
const Report = require('../Models/Report');

// Get all reports
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create new report
router.post('/', async (req, res) => {
    const report = new Report(req.body);
    try {
        const newReport = await report.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get specific report
router.get('/:id', async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (report) {
            res.json(report);
        } else {
            res.status(404).json({ message: 'Report not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
