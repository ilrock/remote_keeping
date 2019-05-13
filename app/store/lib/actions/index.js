import api, { normalize } from '@/api'

export const CREATE_RECORD = ({ endpoint, module, attr }) => {
  return async ({ commit }, record) => {
    const { data } = await api.post(endpoint, record)
    const json = Object.assign(normalize(data))
    commit('MERGE_RECORDS', { records: json, module, attr }, { root: true })
  }
}

export const FETCH_RECORDS = ({ endpoint, module, attr}) => {
  return async ({ commit }) => {
    const { data } = await api.get(endpoint)
    const json = Object.assign(normalize(data))
    commit('MERGE_RECORDS', { records: json, module, attr }, { root: true })
  }
}

export const FETCH_RECORD = ({ endpoint, module, attr }) => {
  return async ({ commit }, { id }) => {
    const url = `${endpoint}/${id}`
    const { data } = await api(url)
    const json = Object.assign(normalize(data))

    commit('MERGE_RECORDS', { records: json, module, attr }, { root: true })
  }
}

export const UPDATE_RECORD = ({ endpoint, module, attr }) => {
  return async ({ commit }, record) => {
    const { data } = await api.patch(`${endpoint}/`, record)
    const json = Object.assign(normalize(data))
    commit('MERGE_RECORDS', { records: json, module, attr }, { root: true })
  }
}

export const DELETE_RECORD = () => {

}