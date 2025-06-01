import mongoose from 'mongoose';

export interface notificationDocument extends mongoose.Document {
  title: string;
  status: string;
  from_user_id: string;
  to_user_id: string;
  description: string;
  updated_at: string;
  created_at: string;
  notifyBy: string;
}


const NotificationSchema = new mongoose.Schema({
    title: {
    type: String,
  },
  status: {
    type: String,
  },

  from_user_id: {
    type: String,
  },
  to_user_id: {
    type: String,
  },
 
  description: {
    type: String,
  },
  updated_at: {
    type: String,
  },
  created_at: {
    type: String,
  },
  notifyBy: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    required: true
}
  
}, { timestamps: true });


const Notifcations = mongoose.model<notificationDocument>("notifications", NotificationSchema);

export default Notifcations;