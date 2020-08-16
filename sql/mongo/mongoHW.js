db.getCollection('students')
// .find(
//     {
//         1) Знайти всіх дітей в яких сердня оцінка 4.2
//         avgScore: 4.2
        
// 2) Знайди всіх дітей з 1 класу
//             class: 1.0
// 3) Знайти всіх дітей які вивчають фізику
//         lessons: "physics"
// 4) Знайти всіх дітей, батьки яких працюють в науці ( scientist )
//             parents: {
//                 $elemMatch: {profession: "scientist"}}
// 5) Знайти дітей, в яких середня оцінка більша за 4
//         avgScore: {
//             $gt: 4}
//     }
// )
// 6) Знайти найкращого учня
//     .sort(
//     {
//         avgScore: -1
//         }
// )
//     .limit(1)
// 7) Знайти найгіршого учня
//         .sort(
//     {
//         avgScore: 1
//         }
//         )
//         .limit(1)
// 8) Знайти топ 3 учнів
//         .sort(
//      {
//          avgScore: -1
//         }
//  )
//      .limit(3)  
// 9) Знайти середній бал по школі
//         .aggregate([
//     {
//         $group: {
//             "_id": 0,
//             "avgPoint": {
//                 $avg: "$avgScore"
//                 }
//             }  
//         },
//         
//     {
//         $project: {
//             "_id": 0
//             }
//         }
// ])
        
// 10) Знайти середній бал дітей які вивчають математику або фізику
// db.getCollection('students').aggregate([
//     {
//        $match: {
//            $or: [{lessons: "mathematics"}, {lessons: "physics"}]
//            } 
//         },
// 
//     {
//         $group: {
//             "_id": "Students_who_learn_mathematics_or_physics",
//             "avgPoint": {
//                 $avg: "$avgScore"
//                 }
//             }  
//         }
// ])
// 11) Знайти середній бал по 2 класі
//         .aggregate([
//     {
//        $match: {class: 2} 
//         },
// 
//     {
//         $group: {
//             "_id": "Students_in_second_class",
//             "avgPoint": {
//                 $avg: "$avgScore"
//                 }
//             }  
//         }
// ])

// 12) Знайти дітей з не повною сімєю
//         .find({"parents.1": {$exists: false}})
// 13) Знайти батьків які не працюють
//         .find(
//     {$and:
//         [ {"parents": {$exists: true}}, {"parents.profession": {$eq: null}} ]
//         }
// )
// 14) Не працюючих батьків влаштувати офіціантами
//             .update(
//     {
//        $and:
//         [ {parents: {$ne: null}}, {"parents.profession": null} ]
//         },
//         
//     {
//        $set: {"parents.$.profession": "waiter"}
//         },
//         
//     {multi: true}       
// )
// 
// 15) Вигнати дітей, які мають середній бал менше ніж 2.5
//         .remove({avgScore: {$lt: 2.5}})
// 16) Дітям, батьки яких працюють в освіті ( teacher ) поставити 5
//             .update(
//     {
//         $and:
//             [{parents: {$ne: null}}, {"parents.profession": "teacher"}]
//         },
//     {
//         $set:
//             {"avgScore" : 5}
//         },
//     {multi: true}
// )
// 17) Знайти дітей які вчаться в початковій школі (до 5 класу) і вивчають фізику ( physics )
//         .find(
//     {
//        $and: [{class: {$lt: 5}}, {lessons: "physics"}] 
//         }
// )
// 18) Знайти найуспішніший клас
//         .aggregate([
//     {$group: {
//            "_id": "$class",           
//             class: {$first: "$class"},
//             avgScore: {$avg: "$avgScore"}  
//         }},
//     {$sort: {avgScore: -1}},
//     {$project: {"_id": 0}},
//     {$limit: 1}
// ])