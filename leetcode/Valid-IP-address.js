/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  const not = "Neither";
  function IP4() {
    for (let i = 0; i < IP.length; i++) {
      const curr = IP[i];
      if (curr === ".") {
        if (i > 0 && IP[i - 1] === ".") return not;
        if (i === IP.length - 1) return not;
        continue;
      }
    }
    const ip = IP.split(".");

    if (ip.length >= 5 || ip.length <= 3) return not;
    for (let i = 0; i < ip.length; i++) {
      const curr = ip[i];
      let isnum = /^\d+$/.test(curr);
      if (!isnum) return not;
      if (+curr > 255) return not;
      if (curr.length >= 2 && curr[0] === "0") return not;
    }
    return "IPv4";
  }

  function format(s, size) {
    while (s.length < size) s = "0" + s;
    return s;
  }

  function IP6() {
    for (let i = 0; i < IP.length; i++) {
      const curr = IP[i];
      if (curr === ":") {
        if (i > 0 && IP[i - 1] === ":") return not;
        if (i === IP.length - 1) return not;
        continue;
      }
    }
    const ip = IP.split(":");
    if (ip.length >= 9 || ip.length <= 7) return not;
    const re = /[0-9A-Fa-f]{6}/g;
    for (let i = 0; i < ip.length; i++) {
      const curr = ip[i];
      let int = parseInt(curr, 16);
      if (
        format(int.toString(16), curr.length).toLowerCase() !==
        curr.toLowerCase()
      )
        return not;
      if (curr.length <= 0 || curr.length >= 5) return not;
    }
    return "IPv6";
  }

  if (IP.includes(".")) return IP4();
  return IP6();
};
