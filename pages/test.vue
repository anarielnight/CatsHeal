<template>
    <EditForm
        :pet="pet"
    />
</template>

<script>
    import EditForm from '~/components/editForm';

    export default {
        components: {
            EditForm
        },
        data() {
            return {
                pet: {}
            }
        }
    }
</script>
