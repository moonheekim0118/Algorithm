/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.users = new Map();
  this.tick = 0;
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  const createdAt = this.tick++;
  if (this.users.has(userId)) {
    const prev = this.users.get(userId);
    this.users.set(userId, {
      ...prev,
      feed: [...prev.feed, { id: tweetId, createdAt }],
    });
  } else {
    this.users.set(userId, {
      feed: [{ id: tweetId, createdAt }],
      following: [],
    });
  }
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  // 내 트윗과 팔로잉 트윗
  if (this.users.has(userId)) {
    const { feed: myfeed, following } = this.users.get(userId);
    const followFeed = following
      .map((v) => this.users.get(v)?.feed ?? [])
      .flat();
    const allFeed = [...myfeed, ...followFeed].sort(
      (a, b) => b.createdAt - a.createdAt
    );
    if (allFeed.length === 0) return [];
    return allFeed.slice(0, 10).map((v) => v?.id) ?? [];
  }
  return [];
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (this.users.has(followerId)) {
    const prev = this.users.get(followerId);
    this.users.set(followerId, {
      ...prev,
      following: [...new Set([...prev.following, followeeId])],
    });
  } else {
    this.users.set(followerId, { feed: [], following: [followeeId] });
  }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.users.has(followerId)) {
    const prev = this.users.get(followerId);
    const updatedFollowing = prev.following.filter((v) => v.id === followeeId);
    this.users.set(followerId, { ...prev, following: updatedFollowing });
  }
};
