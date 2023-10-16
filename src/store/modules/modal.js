export const state = {
    showModal:false,
    typeModal:'user',
    hospitalToShow:0,
};
export const getters = {
    getshowModal(state){
      return state.showModal
    },
    gettypeModal(state){
        return state.typeModal;
    }
};
export const mutations = {
    SET_showModal(state, showModal) {
        if(showModal){
            document.getElementById('modalIso').style.display="flex";
        }else{
            document.getElementById('modalIso').style.display="none";
        }
        state.showModal = showModal;
    },
    SET_typeModal(state,{index,typeModal}) {
        state.hospitalToShow=index
        state.typeModal = typeModal;
        this.commit('SET_showModal',true)
        document.getElementById('hospModal').style.display="none";
        document.getElementById('userModal').style.display="none";
        document.getElementById('cardModal').style.display="none";
        document.getElementById('partnerModal').style.display="none";
        switch (state.typeModal) {
            case "user":
                document.getElementById('userModal').style.display="flex";
                break;
            case "card":
                document.getElementById('cardModal').style.display="flex";
                break;
            case "partner":
                document.getElementById('partnerModal').style.display="flex";
                break;
            default:
                document.getElementById('hospModal').style.display="flex";
                break;
        }
    },
};