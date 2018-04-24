
function pokaz(id)
{
 tresc="";
 switch (id)
 { case 2: tresc += tab2();break;
 case 3: tresc += tab3(); break;
 default: tresc += tab1();
 }
 //pobierz element o wskazanym id i ustaw jego nową zawartość:
 document.getElementById('blok').innerHTML = tresc;
}

function tab1(){
 tresc=`
<div class="tabs" id="tabs">
            <div class="tab active" onclick="pokaz(1)">Tab 1</div>
            <div class="tab" onclick="pokaz(2)">Tab 2</div>
            <div class="tab" onclick="pokaz(3)">Tab 3</div>
        </div> 
<div class="content">Content 1</div>`;
 return tresc;
}
function tab2()
{
 tresc=`
<div class="tabs" id="tabs">
            <div class="tab" onclick="pokaz(1)">Tab 1</div>
            <div class="tab active" onclick="pokaz(2)">Tab 2</div>
            <div class="tab" onclick="pokaz(3)">Tab 3</div>
        </div> 
<div class="content">Content 2</div>`;
 return tresc;
}
function tab3()
{
tresc=`
<div class="tabs" id="tabs">
            <div class="tab" onclick="pokaz(1)">Tab 1</div>
            <div class="tab" onclick="pokaz(2)">Tab 2</div>
            <div class="tab active" onclick="pokaz(3)">Tab 3</div>
        </div> 
<div class="content">Content 3</div>`;
 return tresc;
}
