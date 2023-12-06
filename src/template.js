export const template = document.createElement('template');

template.innerHTML = `
<style>                               
/*:host {*/
/*    width: 100%;*/
/*    height: 100%;*/
/*}*/

main {
  width: 400px;
  margin: 30px auto;
}

section {
  margin-top: 30px;
}

.pieID {
  display: inline-block;
  vertical-align: top;
}

.pie {
  height: 200px;
  width: 200px;
  position: relative;
  margin: 0 30px 30px 0;
}

.pie::before {
  content: "";
  display: block;
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  background: #EEE;
  border-radius: 50%;
  top: 50px;
  left: 50px;
}

.slice {
  position: absolute;
  width: 200px;
  height: 200px;
  clip-path: inset(0px calc(100% - 200px) calc(100% - 200px) 100px);
  animation: rotate 1s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg) translate3d(0,0,0);
  }
}

.slice span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  clip: rect(0px, 200px, 200px, 100px);
}

.legend {
  list-style-type: none;
  margin: 0;
  background: #FFF;
  padding: 15px;
  font-size: 13px;
  box-shadow: 1px 1px 0 #DDD,
              2px 2px 0 #BBB;
}

.legend li {
  width: 110px;
  height: 1.25em;
  margin-bottom: 0.7em;
  padding-left: 0.5em;
  border-left: 1.25em solid black;
}
.legend em {
  font-style: normal;
}

.legend span {
  float: right;
}
</style>
    
 <main id="pie">
  <h1 class="title"><slot name="title">Pie Chart</slot></h1>
  <section>
    <div class="pieID pie">
      
    </div>
    <ul class="pieID legend"/>
  </section>
</main>
   
`
