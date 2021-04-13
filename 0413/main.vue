<template>
	<div id="main">
		<v-btn color="primary" @click="show_dialog = true"> Open Dialog </v-btn>
		<v-container>
			<div class="record">
				<v-data-table
					:headers="headers"
					:items="records"
					class="elevation-1 mx-4 my-12"
				>	
					<template v-slot:item.actions="{ item }">
						<v-icon
							small
							class="mr-2"
							@click="editItem(item);show_dialog = true"
						>
							mdi-pencil
						</v-icon>

						<v-icon
							small
							@click="remove_record(item)"
						>
							mdi-delete
						</v-icon>
					</template>

    			</v-data-table>
				<v-dialog v-model="show_dialog">
					<Dialog-text @add_record="add_record" :show_dialog="show_dialog" @update_show_dialog="update_show_dialog"/>
				</v-dialog>
			</div>
		</v-container>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Child from './child.vue'
	import DialogText from './dialog_text.vue'
	export default {
		// vue object 建議照此順序做
		components: {
			Child,
			DialogText
		},

		props: {
			
		},
		
		data () {
			return {
				headers: [
					{
						text: '類型',
						value: 'thing',
						sortable: false,
					},
					{
						text: '金額',
						value: 'price',
					},
					{ text: '日期', value: 'date', sortable: false, },
					{ text: '另開分頁', value: 'open_new_page', sortable: false, },
					{ text: '操作', value: 'actions', sortable: false }
				],
				records: [
					{'date': '2021-04-11', 'price': 130, 'thing':'吃飯', 'id':'123'}
				],
				show_dialog: false,
				search: '',
				edit_record:{'date': '', 'price': 0, 'thing':'', 'id':''},
				edit_input:{'date': '', 'price': 0, 'thing':'', 'id':''}
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
			add_record (record) {
				if(record.date && record.date && record.thing!= ''){
					let timestamp = Math.floor(Date.now());
					this.records.push({
					date: record.date,
					price: record.price,
					thing: record.thing,
					id: timestamp
      			});
				  this.show_dialog = false;
				}
			},

			update_show_dialog(){this.show_dialog = false},


			remove_record(item){
				this.records.splice(this.item,1);
			},

			editItem (item) {
				console.log(item);
				this.edit_record = this.item;
				console.log(item)
			},

		},
	}
</script>

<style lang="scss" scoped> 
//  scss 中可以兼容 css 的寫法，除了強行修改 vuetify 的 style 之外
@keyframes fade-in {
	0% { opacity: 0;}
	100% { opacity: 1;}
}
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
ul{
	margin-top: 10px;
	width: 100%;
}
li{
	list-style:none;
	border: 2px solid rgba(0, 0, 0, 0.719);
	padding: 5px;
	display: flex;
	margin-bottom:10px;
	border-radius: 5px;
	align-items: center;
	align-items: center;
	animation: fade-in 1s both;
}
li .thing{
	flex: 3;
	font-weight: 500;
	font-size: 18px;
}
li .date{
	flex: 1;
}

</style>