<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ author }}</td>
        <td>{{ version }}</td>
        <td>{{ description }}</td>
        <td>{{ main }}</td>
    </tr>
</template>

<script>
export default {
  name: "Addon",
  props: {
    key: String,
    name: String,
    author: String,
    description: String,
    version: String,
    main: String,
  },
};
</script>
