var findItinerary = function (tickets) {
  var path = ["JFK"];
  //structure of targets:
  //{key: departing port, value: [arriving port, has ticket been used] }
  var targets = {};
  for (var ticket of tickets) {
    if (targets[ticket[0]]) targets[ticket[0]].push([ticket[1], false]);
    else targets[ticket[0]] = [[ticket[1], false]];
  }
  var helper = function (departure) {
    if (path.length === tickets.length + 1) {
      return true;
    }
    if (!targets[departure]) return; //There no ticket departing from this port
    targets[departure].sort((a, b) => (a[0] < b[0] ? -1 : 1));
    for (var i = 0; i < targets[departure].length; i++) {
      //destination is targets[departure][i][0];
      //visited or not : targets[departure][i][1];
      if (targets[departure][i][1]) continue; // if ticket has been used, skip
      targets[departure][i][1] = true;
      path.push(targets[departure][i][0]);
      if (helper(targets[departure][i][0])) return true;
      path.pop();
      targets[departure][i][1] = false;
    }
    return;
  };
  helper("JFK");
  return path;
};
