**Angular** 

Pre-requisetes: HTML, CSS, JavaScript, TypeScript Sections:-

**1. Introduction:- **Install, Projectsetup...basic things
					command: "ng new"  ==> to build entire project structure.


**2. TypeScript:- **Knowing of typeScript and little Practise


**3. Angular Fundamentals: Components, Templates, Directives, Services.**
			
		**Building Blocks of Angular App: **
			Component: Encupscilate the "Data", "HTML Template", "Logic". (by default we have app components)
			Modules: is a container for a group of related components.(by default we have app components)
		
		**Components:**
			Generate Components Using AngularCLI: Command: "ng g c <comp_name>"
						**((OR))**
			naming convention for the file (name-here.component.ts) in the "./src/app/" folder.
			3 steps: 1. Create a components ==>  generally we use Pascal notation, we attach a decorator to the class to make it as component. 
					 2. Register it in a module ==> go to the "./src/app/app.module.ts" file and then add the newly created component in "@NgModule in declarations"
					 3. Add an element in an HTML Markup. ==> go to the "./src/app/app.component.html" file and then add the component by using "selector" in .ts file
			**
		Templates:**
		
		**Directives**: To manipulate the DOM, we use it to add/remove/change a dom element
		
		**Services**:
			Generate Services Using AngularCLI: Command: "ng g s <Services_name>"
			     ((OR))
			naming convention for the file (name.services.ts) in component folder,
			we need to add the service in "@NgModule in providers" in app.modules.ts file.
			
			when you register a dependency as a provider in a module, angular will create a "single instance" of that class for that entire module
			Dependent Injection: Dependency of this class and then register this as a provider in our app module with this implementation when angular is going to create an instance of this component, first
			                     it will instantiate its dependiences and it will inject those dependences into constructor of this class.
								 
								 
**4. Displaying Data and Handling Events: Display Data, Apply Classes/styles dynamically, Format data using Pipes, Handle events.**
		
		**String interpolation:** 
								syntax:{{variable defined in .ts file}}, one-way data binding, (.ts files to HTMl file (component to view)), (no need to import anything seperately) 
								it is a syntatical sugar, when we use this it in-directly class the property Binding,
								for simplicity assume f-string in python language.
		
	**	Property Binding: **
							With property binding we bind a propert of a DOM element,
							syntax: [property ex: src, ]="value/variable defined in .ts file", one-way data binding, (.ts files to HTMl file (component to view)),
		
			String Intrepolation works well for adding dynamic values between headings/paragraph/divs/spans whereever you want to render text || for remaning use Property binding.
		
		**Attribute Binding:**
							**DOM**: Model of object that represent the structure of a document. it's essentially a tree of object in memory. || HTML on other is a markup language that we use to represent DOM in text.
							when your browser phrases the HTML, it creates a tree of onject in memory that they refer to as DOM.
							Most of the attributes of HTML elements, have a one to one mapping for properties of DOM objects. few exceptions: textContent, colSpan
									ex: 'src' is same for both HTML and DOM || syntax: [attr.colSpan] = "colSpan because DOM doesn't know colSpan.
		
		**Adding Bootstrap: **
							Command: npm install bootstrap --save (download and stores it into node modules folder, save flag also adds bootstrap as a dependency in package, can verify in 'package.json'.
							go to app.css and ==> @import "~bootstrap/dist/css/bootstrap.css"
			
		
		**Class Binding:** 
						[class.variable]="variable value"  ==> if this condition is true, this target class will be added to the element otherwise if it's false and this class exists on the element, it will be removed.
						
		**Style Binding:**
						[style.backgroundColour]="isactive ? 'blue' : 'white' "
		
		**Event Binding:**
						We use to handle events raised from the DOM, like Keystrokes, Mouse movement, clicks and so on...
						syntax: (event_name)= "method()" 
						ex1: <button (click)="onClick()">click</button>  ==> without '$event'.
							onClick(){
								console.log("button was clicked");
							}
							
						ex2:
							<button (click)="onClick($event)">click</button> 
							onClick($event){
								$event stopPropagation
								console.log("button was clicked, $event");
							}
		
		**Event Filtering:**
						<input (keyup.enter)="onKeyUp()" />  ==> filtered by 'enter' key, whenever it hit we get console message.
						onKeyUp(){
							console.log("ENTER was pressed");
						}
		
		**Template Variables:**
						<input #email (keyup.enter)="onKeyUp(email.value)" />  ==> declaring a template variable using '#', this variable refference the field
						onKeyUp(email){
							console.log("email");
						}
		
		**Two-way Binding:**
						syntax: [(ngmodel)], explicitly import this module from angular forms, 
						go to app.modules.ts => and then add 'FormsModules' in 'import' section of ngmodule. 
						ex:
						<input [(ngmodel)]='email' (keyup.enter)="onKeyUp()" />  ==> two sided, when we given def@gmail.com as a User, it updated ==> two way binding
						export class name_component{
							email = "abc@gmail.com";
							onKeyUp(){
								console.log(this.email);
							}
		
		**Pipes:**
				Used to format data, ex: Uppercase, Lowercase, Decimal, Currency, Percent
				syntax: variable | Uppercase
				
		**Custom pipes:** ...

		
**5. Building Re-usable Components: Pass data, Raise custom events, Apply styles, Shadow DOM, View encapsulation.
**
		**Component API:** 
					In order to make a component more reusable, we want to addd a bunch of input and output properties. 
					We use input properties to pass input or state to a component and we use output properties to raise an events from these custom components.
					The combination of input and output properties for a component, make up for what we call the public API of that component, 
		
		**Input Properties:**
				(All this steps have to be done in custom or created component.)
					Approach 1:-
						import 'Input' for the 'angular/core', and add 'Input' decorator to the variable or a method that we have to re-use.
						Ex:
						@Input() isActive=true ==> and we use this variable in the custom component that we created.  ==> in .ts file
						<custom-component [isactive]="isActive"></custom-component>   ==> in HTML file
						
					Approach 2:- Component Meta-data(Bad approach)
						add input field in componet decorator
						@Component({ ...|...|...| inputs:["isActive"]})
						As long as we have the property(isactive) it will works otherwise, it don't
		
		**Aliasing Input Properties:**
								addressing by other name & It keep the contract of this API stable,
								Even if we change the name of the variable, connection not broken because of Aliasing.
								If you are building re-usable component, give your input properties an alias, keep the contract of your component stable
								Note: When you rename fields, your templates are not updated so we need to manually make this changes.
								Ex:
								@Input('act') isActive=true ==> and we use this variable in the custom component that we created. ==> in .ts file
								<custom-component [act]="isActive"></custom-component>  ==> in HTML file
		
	**	Output Properties:**	Used to Raise a custom event for our custom component.
				(All this steps have to be done in custom or created component.)
					Ex:
						import 'Output' for the 'angular/core', and add 'Ouput' decorator to the variable or a method that we have to raise event.
						Ex:
						@Output() change= new EventEmitter(); ==> and we use this variable in the custom component that we created.  ==> in .ts file
						
						<custom-component [isactive]="isActive" (change)="changed()"></custom-component>   ==> in HTML file
							
		
		**Passing Event Data:**
							
		
		**Aliasing Output Properties:**
									same as Input aliasing
		
		**Templates**:
				we can you use both inline 'template' or templateUrls, it totally depends upon our use, if we have more lines then better go with templateUrls approach.
		
		**Styles:**
				we can you use both inline 'styles' or styleUrls, it totally depends upon our use, if we have more lines then better go with styleUrls approach.
				if we have both in use case, angular only going to pick only one of these styles defination that are defined at the last.
		
		**View Encapsulation:**
				ShadowDOM: It's basically a specification that enables DOM tree and style encapsulation. simply allows us to apply scoped styles to element without bleeding out to the outer world.
				
		
		**ngContent & ngContainer:** 
					HTML to HTMl rendering...
					Syntax: <ng-content></ng-content> | <ng-container></ng-container>					
					
		

		
**6. Directives: ngFor, ngIf, ngSwitchCase, ngClass, ngStyle, Building custom directives.**

	Used in HTML file, by using this we can decide what we have to display without using any .ts code.
	
	two types of Directives: 
	  1. Structural: Modify the structure of the DOM.  ==> prefix them with (*)
	  2. Attribute: Modify the attributes of DOM elements.

		**ngIf:**
				It is only used when the condition is truthy or falsy.
				when we use this if the condition is falsy, element is no longer see in DOM...
				ex:
					<div *ngIf="condition"; then first else second>   ==> conditon/variable taken from .ts file
					</div>
					<ng-template #first>
								if conditon is true, we can see this block of code in website...
					</ng-template>
					<ng-template #second>
								above course conditon is false, so this block of code is executed...
					</ng-template>
		
		**Hidden Property:**
							when we use this if the condition is falsy, element is still in DOM and it is hidden
							ex:
							<div [hidden]='condition'>
							</div>
				
		
		**ngSwitchCase**:
						We can use custom variable conditons, 
						In the below example, we are checking the variable with first, second,, if anything matches it will displays the matched block,, variable is taken from .ts file
						Ex:
						<div [ngSwitch]= "variable">
							<div *ngSwitchCase="'first'"> Displayed 1</div>
							<div *ngSwitchCase="'second'"> Displayed 2</div>
							<div *ngSwitchDefault> Displayed default</div>
						</div>
						
		**ngFor**:
				In the below ex: we already define courses = ['a', 'b', 'c'] in .ts file,
				Ex:
				<ul>
					<li *ngFor="let course of courses; index as i"> {{i}}-{{course}}
					</li>
				</ul>
				
		
		**ngFor and Change Detection:**
										
		
		**ngFor and Trackby:**
		
		**Leading Asterisk:**
		
		**ngClass**: By using it we don't have to repeat class binding 
				Ex: [ngClass]="{"aa":"AA", "bb":"BB"}"
		
		**ngStyle**: similar to ngClass but here we use it for Style Binding. 
		
		**Safe Traversal Operator:**
		
		**Creating Custom Directive:**
			Command: ng g d <name>
		
