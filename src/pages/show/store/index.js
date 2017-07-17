import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    allDataSourceData: [],
    allDepartmentData: [],
    pushPackages: [],
    allJumpPageData: [],
    getFormPageData: {},
    activityStatusList: []
}

export default new Vuex.Store({
        state,
        getters,
        actions,
        mutations
    }
)
