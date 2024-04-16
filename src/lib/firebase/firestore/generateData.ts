import { addChatRoom } from "./chatRoomApi";
import { addFriend } from "./friendApi";
import { addMessage } from "./messageApi";
import { addUser } from "./userApi";

async function setUserCollection() {
    await addUser({
        id: 'aaa01',
        name: 'AAAAA',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa02',
        name: 'BBBBB',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa03',
        name: 'CCCCC',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa04',
        name: 'DDDDD',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa05',
        name: 'EEEEE',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa06',
        name: 'FFFFF',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa07',
        name: 'GGGGG',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa08',
        name: 'HHHHH',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa09',
        name: 'IIIII',
        phoneNumber: '00011114444'
    });

    await addUser({
        id: 'aaa10',
        name: 'JJJJJ',
        phoneNumber: '00011114444'
    });
}

async function setFriendrCollection() {
    await addFriend({
        id: 'aaa01',
        friendId: 'aaa02',
    });
    await addFriend({
        id: 'aaa01',
        friendId: 'aaa03',
    });
    await addFriend({
        id: 'aaa01',
        friendId: 'aaa04',
    });
    await addFriend({
        id: 'aaa01',
        friendId: 'aaa05',
    });
    await addFriend({
        id: 'aaa01',
        friendId: 'aaa06',
    });
    await addFriend({
        id: 'aaa02',
        friendId: 'aaa03',
    });
    await addFriend({
        id: 'aaa01',
        friendId: 'aaa04',
    });
}
async function setChatRoomCollection() {
    await addChatRoom({
        creatorId: 'aaa01',
        friendId: 'aaa02',
    });
    await addChatRoom({
        creatorId: 'aaa01',
        friendId: 'aaa03',
    });
    await addChatRoom({
        creatorId: 'aaa01',
        friendId: 'aaa04',
    });
}
async function setMessageCollection() {
    await addMessage({
        chatRoomId: 'xxx',
        toUserId: 'aaa01',
        message: '',
        userIds: ['aaa01,', 'aaa02']
    })
}

(async function setUser(){
    await setUserCollection()
    await setFriendrCollection()
    await setChatRoomCollection()
    // await setMessageCollection()
})()