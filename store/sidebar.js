export const state = () => ({
  opened: false
});

export const mutations = {
  toggle(state) { state.opened = !state.opened}
}