<template>
    <div>
        <GMap style="height: 100vh;" ref="gMap" language="zh-TW" :cluster="{ options: { styles: clusterStyle } }" :center="{ lat: position.lat, lng: position.lon }" :zoom="17">
            <GMapMarker v-for="item in mapData" :key="item.StationID" :position="{ lat: item.StationPosition.PositionLat, lng: item.StationPosition.PositionLon }" :options="{ icon: pins.selected }" @click="currentLocation = item">
                <GMapInfoWindow>
                    <p><strong>{{ item.StationName.Zh_tw }}</strong></p>
                    <p>地址: {{ item.StationAddress.Zh_tw}}</p>
                    <p>車輛: {{item.AvailableRentBikes}}</p>
                    <p>車位: {{item.AvailableReturnBikes}}</p>
                </GMapInfoWindow>
            </GMapMarker>
            <!-- <GMapCircle :options="circleOptions" /> -->
        </GMap>    
    </div>
        
 
</template>

<script>


export default {
  name: 'MapTest',
  props: ['location','number','position'],
  data() {
    return {
        currentLocation: {},
        pins: {
            selected: require("@/assets/img/GPS.png"),
        },
        // mapStyle: [...],
        clusterStyle: [
            {
                url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                width: 56,
                height: 56,
                textColor: "#fff"
            }
        ],
        mapData: []
    }
  },
  methods: {
    combineData() {
        this.location.forEach((item, index) => {
            this.mapData[index] = {...this.location[index], ...this.number[index]};
        });
    }
  },
  created() {
      this.combineData();
  }
  
}
</script>

<style lang="scss">

.GMap {
    .GMap__Wrapper {
        height: calc(100vh - 71px);
    }
}

</style>