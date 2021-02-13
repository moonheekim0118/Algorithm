function solution(skill, skill_trees) {
    let cnt=0;
    for(let i =0, len = skill_trees.length ; i<len; i++){
        let skillIdx=0;
        let flag=true;
        const nowSkill=skill_trees[i];
        for(let j =0, wordLen=nowSkill.length ; j<wordLen; j++){
            if(skill.includes(nowSkill[j])){
                if(skill[skillIdx]===nowSkill[j]){
                    skillIdx++;
                } else {
                    flag=false;
                    break;
                }
            }
        }
        if(flag) cnt++;
    }
    return cnt;
}

solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]);