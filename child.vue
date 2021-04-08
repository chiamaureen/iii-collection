<template>
    <div class="card">
        <h2> {{ card_info['title'] }} </h2>
        <v-img :src="card_info['src']" class="photo" height="300" alt="" />
        <div class="icons">
            <v-icon>home</v-icon>
            <v-icon>event</v-icon>
            <v-icon>info</v-icon>
        </div>
    </div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		components: {

        },

		props: {
            card_info: {
                type: Object, // Number, Object, String, Boolean, Array
                default: (() => {}) //Object用這個
            },
        },

		data () {
			return {
                
			}
		},
		
		computed: {

		}, 

		watch: {

		},
		
		created () {
		
		},

		methods: {
            child_func () {
                // this.$emit
                this.$emit('calc_func');
            }
		},
	}
</script>

<style lang="scss" scoped> 
.card {
    // width: 80%;
    margin: auto;
    background-color: #fff;
    border-radius: 15px;
    height: 350px;
    box-shadow: 3px 3px 5px 6px #d3d3d359;
    position: relative;
}

h2 {
    position: absolute;
    bottom: 55px;
    left: 15px;
    z-index: 99;
    color:rgb(255, 255, 255)
}

.photo {
    border-radius: 15px 15px 0 0 ;
}

.icons {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
}

</style>