import UsersService from "@/services/UsersService";

export const state = {
    showUserCard:false,
    op:0,
    userInfo:{
        name:"",
        surname:"",
        phone_number:"",
        birthday:"",
        addresse:"",
        type:"",
        card_id:"",
        uuid:"",
        city:"",
        code_postal:"",
    }
};
export const getters = {
    getshowUserCard(state){
      return state.showUserCard
    },
    getop(state){
        return state.op
    },
    getuserInfo: (state) => (id) => {
        document.getElementById('searchBtn').innerText="Searching ..."
        UsersService.getUserCard(id)
        .then(response =>{
            document.getElementById('searchBtn').innerText="Search"
            document.getElementById('errorMsg').style.opacity="1"
            if(Object.keys(response.data).length!=0){
                document.getElementById('errorMsg').style.opacity="0"
                state.userInfo.name=response.data.name
                state.userInfo.birthday=response.data.birthdate
                state.userInfo.surname=response.data.surname
                state.userInfo.phone_number=response.data.phone_number
                state.userInfo.addresse=response.data.addresse
                state.userInfo.card_id=response.data.card_id
                state.userInfo.type=response.data.type
                state.userInfo.uuid=response.data.uuid
                state.userInfo.city=response.data.city
                state.userInfo.code_postal=response.data.code_postal
                document.getElementById('landing').style.display='none'
                document.getElementById('modalIso').style.display='none'
                document.getElementById('userCard').style.display='flex'
                return true
            }else{
                return false
            }
        })
        .catch(error=>{
            document.getElementById('errorMsg').style.opacity="1"
            console.log(error)
        })
        return false
      },
      getuserInfoDAta(state){
        return state.userInfo
      }

};
export const mutations = {
    SET_showUserCard(state, showUserCard) {
        if(showUserCard){
            this.commit('SET_showModal',false)
            document.getElementById('landing').style.display="none";
            document.getElementById('userCard').style.display="flex";
        }else{
            document.getElementById('landing').style.display="block";
            document.getElementById('userCard').style.display="none";
        }
        state.showUserCard = showUserCard;
    },
};
export const actions={
    showAllUsers(){
        UsersService.getUsers()
    },
}