// 歌手信息
export const singer = state => state.singer

// 播放状态
export const isPlaying = state => state.isPlaying

// 当前播放列表
export const playList = state => state.playList

// 历史播放列表
export const hisMusicList = state => state.hisMusicList

// 播放过的歌曲歌单(避免上一首或者随机播放播放到重复的歌曲)
export const hasPlayList = state => state.hasPlayList

// 当前播放模式
export const playOrd = state => state.playOrd

// 当前播放歌曲url
export const musicUrl = state => state.musicUrl

// 当前播放歌曲细节
export const musicDetail = state => state.musicDetail

// 当前播放歌曲id
export const songId = state => state.songId

// 搜索历史
// export const searchHistory = state => {
//   return state.searchHistory
// }