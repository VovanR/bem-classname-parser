function BemParseBase( source ){
	/*=
	 | {root}__elem--modf_mval
	 */
	var
	result= source,
	sep= this.sep.modf;
	if( sep )
		result= source.split(sep)[0];
	return result;
	}
function BemParseModfName( source ){
	/*=
	 | root__elem--{modf}_mval
	 */
	var
	result= '',
	sep= this.sep.modf,
	div;
	if( sep ){
		div= source.split(sep);
		if( div.length > 1 ){
			result = div[1];
			}
		}
	return result;
	}
function BemParseModfVal( source ){
	/*=
	 | root__elem--modf_{mval}
	 */
	var
	result= '',
	div= source.split(this.sep.mval);
	if( div.length>1 )
		result= div[1];
	return result;
	}
function BemParseModf( source ){
	/*=
	 | root__elem--{modf}_mval
	 */
	var
	result= null,
	sep= this.sep.modf,
	name;
	if( sep ){
		name = this.ƒn.parseModfName(source);
		if( name ){
			var
			val= this.ƒn.parseModfVal(source)||null;
			result= {name,val,sep:this.sep.modf};
			}
		}
	return result;
	}

var
sep={
  elem:'__',
  modf:'--',
  mval:'_'
  },
BemParse= function( source ){
	var//@alias[this]
		self= this;
	Object.assign(self,{
	  sep,
		ƒn:{
			parseBase:     src=>    BemParseBase.call(self,src),
			parseModfName: src=>BemParseModfName.call(self,src),
			parseModfVal:  src=> BemParseModfVal.call(self,src),
			parseModf:     src=>    BemParseModf.call(self,src),
			}
		});

	var result= {};
	if( !source ) return result;

	//=split block
	var
	div=  source.split(self.sep.elem),
	item= div[0],
	part= 'root';
	//+concat name
		result[part]={ name:self.ƒn.parseBase(item) };
	//=has elem
	if( div.length>1 ){
		//get postfix
		item= div[1];
		part= 'elem';
		//concat postfix
			result[part]={ name:self.ƒn.parseBase(item) };
		}
	//=parse mod
	var
	mod= self.ƒn.parseModf(item);
	if( mod )
		result[part].modf= mod;
	return result;
	};//BemParse()

module.exports= {
	BemParse,
	opts(elem='__',modf='--',mval='_'){
		Object.assign(sep,{elem,modf,mval})
		return this.BemParse;
		}
	};//exports