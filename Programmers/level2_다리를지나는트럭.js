// 트럭 = 1초에 1만큼 움직임
// 다리의 길이 = bridge length
// 다리는 무게 weight까지 견딘다.
// 모든 트럭 --> truck weights 이 다리를 건너려면 최소 몇초가 걸리는가 

function solution(bridge_length, weight, truck_weights) {
    let answer=1; //답 , 먼저 첫번째 truck 보내고 시작하므로 1 로 추가 
    let bridge=[]; // 다리 큐 
    let bridge_sum=0; // 현재 다리에 있는 트럭 무게 합 
    
    // 다리 0으로 초기화 => bridge length만큼 
    for(let i =0; i<bridge_length-1;i++){
        bridge.push(0);
    }

    let truck=truck_weights.shift(); // 첫번째 트럭 
    bridge_sum+=truck; // 첫번째 트럭 무게 추가 
    bridge.push(truck);  // 다리에 올려놓음 

    while(bridge_sum){ 
        bridge_sum-=bridge.shift(); // 다리에서 맨 앞에있는 트럭 빼주기 
        truck = truck_weights.shift(); // 새로운 트럭
        if(bridge_sum+truck <=weight){ // 새로운 트럭이 다리에 올라와도 ok ? 
            bridge_sum+=truck; // 무게 추가 
            bridge.push(truck); // 다리에 올려놓기 
        } else { // no 
             truck_weights.unshift(truck); // 다시 대기열로 보내버림 
             bridge.push(0); // 아무것도 못넣는대신 0 넣어주기
        }
        answer++; // 맨 앞트럭 보내줌 + 새로운 트럭 들어옴 (or not) ==> 1초 지남 
    }

    return answer;
}

console.log(solution(
    
  	2, 10, [7, 4, 5, 6]));