<template>
    <table>
         <thead>
            <tr>
                <slot name="tr">
                </slot>
            </tr>
            </thead>
            
            <tbody>
                    <slot name="td">
                    </slot>
            </tbody>
    </table>
</template>

<script>

export default{

}
</script>

<style lang="scss" >
table{
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    tr{
        font-size: 14px;
        border-bottom: 1px solid rgb(208, 208, 208);
    }
    td{
        padding: 1rem 0;
    }
}
</style>