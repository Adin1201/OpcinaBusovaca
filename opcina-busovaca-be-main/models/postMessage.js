import mongoose from "mongoose";

const reqString = {
    type: String,
    required: true
}

const attachment = {
    name: String,
    file: String
}

const postSchema = mongoose.Schema({
    title: reqString,
    titleHR: reqString,
    subTitle: String,
    subTitleHR: String,
    body: String,
    bodyHR: String,
    tags: [String],
    displayFile: [String],
    selectedFile: String,
    createdAt: String,
    isHeader: Number,
    link: String,
    oglasLink: String,
    attachedItems: [attachment],
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage