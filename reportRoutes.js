const express = require('express');
const client = require('./server');
const router = express.Router();
const reportController = require('./reportController');


// router.param('id', tourController.checkId);

// router
//   .route('/top-5-cheap')
//   .get(tourController.aliasTopTours, tourController.getAllTours);

// router.route('/tour-stats').get(tourController.getTourStats);

// router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
console.log(client);

router.post('/events', async (req,res) =>{
    
    const dataJson = req.body;
    try {
      const createdReport=  await DB.db("TrialDB").collection("events").insertOne(dataJson);
      res.json(createdReport);
      console.log(createdReport);
    } catch (error) {
        console.log(error);
        res.send(error.message);
    }
    

});

// router.get('/events', async (req, res) =>{

//     try {
//         const events = await db.db.collection("TrialDB").find({})
//         res.json(events);

//     } catch (error) {
//         res.send(error);
//     }
// })
 module.exports = router;


// router
//   .route('/')
//   .get(reportController.getAllReports)
//   .post(reportController.createReport);

// router
//   .route('/:id')
//   .get(reportController.getReport)
//   .patch(reportController.updateReport)
//   .delete(reportController.deleteReport);

// module.exports = router;
