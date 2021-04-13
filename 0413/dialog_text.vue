<template>
    <v-card class="px-5">
        <!-- <v-text-field v-model="record.date" placeholder="日期"></v-text-field> -->
           <v-col
                cols="12"
                sm="12"
                md="12"
            >
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="record.date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="record.date"
                            label="選擇日期"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="record.date"
                    no-title
                    scrollable
                    locale="zh-cn"
                    >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                        Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(record.date)"
                        >
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
        
        <v-text-field v-model.number="record.price" type="number" placeholder="價格"></v-text-field>
        <v-text-field v-model="record.thing" placeholder="買了什麼" @keyup.enter="confrim"></v-text-field>

        <v-btn color="warning" @click="$emit('update_show_dialog', false)" class="mb-4"> 取消 </v-btn>
        <v-btn color="primary" @click="confrim()" class="mb-4"> 確認 </v-btn>
    </v-card>
</template>

<script>
export default {
    props: {

    },
    data () {
        return {
            record: {
            //    'date': '2021/4/11', 'price': 130,'thing':'吃飯'
            },
            // date: new Date().toISOString().substr(0, 10),
            // menu: false,
        }
    },
    methods: {
        confrim () {
            // 需要去呼叫main，add record(dialog_text) into records(main)
            this.$emit('add_record', this.record);
            let new_date = this.record.date;
            let new_price = this.record.price;
            let new_thing = this.record.thing;
            this.record = {
                'date': new_date,
                'price': new_price,
                'thing': new_thing 
            };
            this.record.date='';
            this.record.price='';
            this.record.thing='';
        }
    }
}
</script>

<style>

</style>