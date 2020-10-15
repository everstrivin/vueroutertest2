<template>
    <div class="modal fade hide" id="touristmodal" tabindex="-2" role="dialog" aria-labelledby="touristModalLabel" aria-hidden="true" @click="closeme" style="display: none;">
      <div class="modal-dialog modal-dialog-centered" style="height:1%;max-width: 90%;overflow: hidden;margin: 0 auto;" role="dialog" @click.stop>
        <div class="modal-content" style="height:90%">

          <div class="modal-header">
              <h1>How tours work</h1>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeme">
                <span aria-hidden="true">&times;</span>
              </button>
          </div>
		    <div class="modal-body" style="max-height:60%;overflow-y:auto;text-align:left;">
			  </div>
          <div class="modal-footer">
              <button class="btn btn-primary" @click="closeme">
                OK
              </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import EventBus from '../eventBus';
export default {
  data () {
			return {
			}
  },
  created() {
    const unregisterRouterGuard = this.$router.beforeEach((to, from, next) => {
      EventBus.$emit('closemodal');
      this.back();
      next(false);
    });

    this.$once('hook:destroyed', () => {
      unregisterRouterGuard();
    });

    console.log("dialog created");
  },
  methods: {
    closeme: function() {
      this.$router.back();
      //This EventBus goes to app.js
      EventBus.$emit('closemodal');
      //this.$router.beforeEach((to, from, next) => {
      //  next(false);
      //});
    },
    back() {
      this.$router.back();
    }
  },
  mounted() {
    $('#touristmodal').modal('show');
    //$('#touristmodal').show();
    console.log("should be ounted");
  }
}
</script>

<style>
/*.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }*/
</style>