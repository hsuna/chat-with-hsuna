/**聊天信息  */
let data={
    chats:[]
}

export default {
    get(){
        return data;
    },

    getChats(){
        return data.chats;
    },
    addChat(obj){
        data.chats.push(obj);
        return data.chats;
    },
    clearChat(){
        data.chats = [];
    }
}
