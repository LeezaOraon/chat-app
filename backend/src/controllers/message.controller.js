import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUsersForSidebar = async(req,res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteresUser = await User. find({_id: {$ne: loggedInUserId}}).select("-password");

        res.status(200).json(filteresUser);

    } catch (error) {
        console.log("Error in getUsersForSidebar : ", error.message);
        res.status(500).json({ message: "Internal Server Error" });
        
        
    }
};

export const getMessages = async(req,res) => {
    try {
        const {id:userToChatId} =req.params
        const senderId= req.user._id;

        const messages= await Message.find({
            $or: [ 
                { senderId: myId, receiverid:userToChatId},
                {senderId:userToChatId, receiverId:myId}
            ]
        });

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
        
    }
};

export const sendMessage= async (req,res) => {
    try {
        const{ text, image} = req.body;
        const { id: receiverId}= req.params;
        const senderid= req.user._id;

        let imageUrl;
        if(image) {
            //upload base64 image to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl= uploadResponse.secure_url;
        }

        const newMessage= new Message ({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });

        await newMessage.save();

        //todo: realtime functionality goes here =>soket.io

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage conyroller:", error.message);
        res.status(500).json({error: "Internal server error"});
        
    }
};