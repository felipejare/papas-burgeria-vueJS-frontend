<script>
import { Calendar, DatePicker } from 'v-calendar';
import 'v-calendar/style.css';

export default {
    components: {
        Calendar,
        DatePicker,
    },
    data() {
        return {
            date: new Date(),
        };
    },
}
</script>
<template>
    <DatePicker v-model="date" />

</template>
<style></style>