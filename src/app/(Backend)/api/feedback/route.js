import { getFeedbacks } from "../../lib/dbConnect"

// GET All Feedbacks
export async function GET(request) {
    try{
        const feedbacksCollection = await getFeedbacks();
        const result = await feedbacksCollection.find({}).toArray();
        console.log(result);
        return Response.json({
            success: true,
            message: result,
            status: 200
        })
    }
    catch(err){
        return Response.json({
            success: false,
            error: err.message,
            status: 500
        })
    }
}

// POST Feedbacks
export async function POST(request) {
    try {
        const feedbacksCollection = await getFeedbacks();
        const data = await request.json();
        const result = await feedbacksCollection.insertOne(data);
        return Response.json({
            success: true,
            message: result,
            status: 201
        });
    } catch (err) {
        return Response.json({
            success: false,
            error: err.message,
            status: 500
        });
    }
}