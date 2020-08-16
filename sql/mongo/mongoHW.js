db.getCollection('students')
// .find(
//     {
//         1) ������ ��� ���� � ���� ������ ������ 4.2
//         avgScore: 4.2
        
// 2) ������ ��� ���� � 1 �����
//             class: 1.0
// 3) ������ ��� ���� �� �������� ������
//         lessons: "physics"
// 4) ������ ��� ����, ������ ���� �������� � ����� ( scientist )
//             parents: {
//                 $elemMatch: {profession: "scientist"}}
// 5) ������ ����, � ���� ������� ������ ����� �� 4
//         avgScore: {
//             $gt: 4}
//     }
// )
// 6) ������ ���������� ����
//     .sort(
//     {
//         avgScore: -1
//         }
// )
//     .limit(1)
// 7) ������ ��������� ����
//         .sort(
//     {
//         avgScore: 1
//         }
//         )
//         .limit(1)
// 8) ������ ��� 3 ����
//         .sort(
//      {
//          avgScore: -1
//         }
//  )
//      .limit(3)  
// 9) ������ ������� ��� �� ����
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
        
// 10) ������ ������� ��� ���� �� �������� ���������� ��� ������
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
// 11) ������ ������� ��� �� 2 ����
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

// 12) ������ ���� � �� ������ ���
//         .find({"parents.1": {$exists: false}})
// 13) ������ ������ �� �� ��������
//         .find(
//     {$and:
//         [ {"parents": {$exists: true}}, {"parents.profession": {$eq: null}} ]
//         }
// )
// 14) �� ��������� ������ ���������� �����������
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
// 15) ������� ����, �� ����� ������� ��� ����� �� 2.5
//         .remove({avgScore: {$lt: 2.5}})
// 16) ĳ���, ������ ���� �������� � ���� ( teacher ) ��������� 5
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
// 17) ������ ���� �� ������� � ��������� ���� (�� 5 �����) � �������� ������ ( physics )
//         .find(
//     {
//        $and: [{class: {$lt: 5}}, {lessons: "physics"}] 
//         }
// )
// 18) ������ ����������� ����
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