export default {
    name: "helpers",
    methods: {
        getImgUrl(pic) {
            return require('../assets/'+pic)
        }
    }
}