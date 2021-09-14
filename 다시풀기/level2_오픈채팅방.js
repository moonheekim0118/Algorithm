function solution(record) {
    const users = new Map();
    const STATUS = {
        ENTER : 'Enter',
        LEAVE : 'Leave',
        CHANGE : 'Change'
    }
    const MESSAGES = {
        Enter :'님이 들어왔습니다.',
        Leave : '님이 나갔습니다.'
    }
    const parsedRecord = [];
    
     record.forEach((str)=>{
        const [status, uid, nickname] = str.split(" ");
        if(status === STATUS.ENTER || status === STATUS.CHANGE ) users.set(uid,nickname);   
        if(status !== STATUS.CHANGE ) parsedRecord.push([status,uid]);
    });
    
    return parsedRecord.map(([status, uid])=>{
        return `${users.get(uid)}${MESSAGES[status]}`
    }) 
}