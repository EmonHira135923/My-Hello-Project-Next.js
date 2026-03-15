import { getFeedbacks } from "@/app/(Backend)/lib/dbConnect";
import { ObjectId } from "mongodb";

// GET Feedback
export async function GET(request, { params }) {
  try {
    const feedbackCollection = await getFeedbacks();
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const result = await feedbackCollection.findOne(query);
    console.log(query);
    return Response.json({
      success: true,
      status: 200,
      message: result,
    });
  } catch (err) {
    return Response.json({
      success: false,
      error: err.message,
      status: 500,
    });
  }
}

// Update Feedbacks
export async function PATCH(request, { params }) {
  try {
    const feedbackCollection = await getFeedbacks();
    const { id } = await params;

    const body = await request.json();
    const { message } = body;

    const query = { _id: new ObjectId(id) };

    const newData = {
      $set: {
        message,
      },
    };

    const result = await feedbackCollection.updateOne(query, newData);

    return Response.json({
      success: true,
      status: 200,
      message: result,
    });
  } catch (err) {
    return Response.json({
      success: false,
      error: err.message,
      status: 500,
    });
  }
}

// Delete Feedbacks
export async function DELETE(request, { params }) {
  try {
    const feedbackCollection = await getFeedbacks();
    const { id } = await params;

    const query = { _id: new ObjectId(id) };
    const result = await feedbackCollection.deleteOne(query);

    return Response.json({
      success: true,
      status: 200,
      message: result,
    });
  } catch (err) {
    return Response.json({
      success: false,
      error: err.message,
      status: 500,
    });
  }
}
