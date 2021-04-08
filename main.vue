<template>
	<div id="main">
		<v-container>
			<v-row>
				<!-- (1) button center -->
				<div class="random-button d-flex justify-center">
            	<v-btn color="primary" @click="random_card" class="mt-3"> Random Cards </v-btn>
				</div>
				<!-- <v-col v-for="(card, index) in card_list" :key="index" :cols="card['cols']"> -->
				<v-col cols="12">
					<Child :card_info="card_list[0]"/>
				</v-col>

				<v-col cols="6">
					<Child :card_info="card_list[1]"/>
				</v-col>

				<v-col cols="6">
					<Child :card_info="card_list[9]"/>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Child from './child.vue'
	export default {
		// vue object 建議照此順序做
		components: {
			Child
		},

		props: {

		},
		
		data () {
			return {
				card_list: [
					{'title': '1', 'src': 'https://i.imgur.com/AD3MbBi.jpg','cols':12, 'class': 'advanced'},
					{'title': '2', 'src': 'https://i.imgur.com/3HoMSSu.jpg','cols':6, 'class': 'normal'},
					{'title': '3', 'src': 'https://i.imgur.com/zYhkOrM.jpg','cols':12, 'class': 'advanced'},
					{'title': '4', 'src': 'https://i.imgur.com/zt7smR4.jpg','cols':12, 'class': 'normal'},
					{'title': '5', 'src': 'https://i.imgur.com/8PDnHK2.jpg','cols':6, 'class': 'advanced'},
					{'title': '6', 'src': 'https://i.imgur.com/viwpmPe.jpg','cols':6, 'class': 'normal'},
					{'title': '7', 'src': 'https://i.imgur.com/hYJ64VY.jpg','cols':6, 'class': 'advanced'},
					{'title': '8', 'src': 'https://i.imgur.com/zYhkOrM.jpg','cols':6, 'class': 'advanced'},
					{'title': '9', 'src': 'https://i.imgur.com/zYhkOrM.jpg','cols':6, 'class': 'normal'},
					{'title': '10', 'src': 'https://i.imgur.com/hYJ64VY.jpg','cols':12, 'class': 'advanced'},
				],
			}
		},
		
		computed: {
			...mapState([
				'user'
			]),
		}, 

		watch: {

		},
		
		created () {
			// 取得變數，但畫面還沒render
		},

		mounted () {
			// html完整render後
		},

		destroyed () {
			// 此vue被刪除
		},

		methods: {
			// parent_func () {
			// 	this.number += 10;
			// }
			random_card () {
				[1,2,3,4,5,6,7,8,9,10].sort((a,b)=>Math.random()>0.5?1:-1)
			}
		},
	}
</script>

<style lang="scss" scoped> 
//  scss 中可以兼容 css 的寫法，除了強行修改 vuetify 的 style 之外
.main {
	&__content {
		display: block;
		color: red;
	}

	&__user {
		color:blue;
	}
}
.random-button{
	width: 100%;
}

</style>