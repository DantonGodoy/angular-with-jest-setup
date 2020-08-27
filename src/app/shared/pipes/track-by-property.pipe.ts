import { Pipe, PipeTransform } from '@angular/core';

// ---
// EXPLANATION.
// Pure Pipe that accepts a property name and also an array of property names and returns a function that plucks whatever argument
// from the given item in an ngFor structural directive.
// The idea behind it would be that the TrackByPropertyPipe would take, for example both the "type" and the "id" properties from a
// collection and generate a unique identity token that could be used to differentiate between all the items in the NgFor collection.
// It also allows a special property name, "$index", to be provided as a mean to use the collection index as the object identity.
// ---
interface TrackByFunctionCache {
  [propertyName: string]: <T>(index: number, item: T) => any;
}

// Since the resultant TrackBy functions are based purely on a static property names, we
// can cache these Functions across the entire app. No need to generate more than one
// Function for the same property names.
const cache: TrackByFunctionCache = Object.create(null);

@Pipe({
  name: 'trackByProperty',
  pure: true
})
export class TrackByPropertyPipe implements PipeTransform {

  // Returns a TrackBy function that plucks the given properties from the ngFor item.
  // tslint:disable-next-line: ban-types
  public transform(propertyNames: '$index' | string | string[] | any): Function {

    // We can uncomment the next line for debugging/development purposes.
    // console.warn(`Getting track-by for [${propertyNames.toString()}].`);

    let cacheKey = propertyNames;

    // If the given property names are defined as an Array, then we have to generate
    // the item identity based on the composition of several item values (in which
    // each key in the input maps to a property on the item).
    if (Array.isArray(propertyNames)) {
      cacheKey = propertyNames.join('->');

      // Ensure cached identity function.
      if (!cache[cacheKey]) {
        cache[cacheKey] = function trackByProperty<T>(index: number, item: T): any {
          // tslint:disable-next-line: prefer-const
          let values = [];
          // Collect the item values that will be aggregated in the resultant
          // item identity
          // tslint:disable-next-line: prefer-const
          for (let propertyName of propertyNames) {
            values.push(item[propertyName]);
          }
          return (values.join('->'));
        };
      }

      // If the property name is the special '$index' key, we'll create an identity
      // function that simply uses the collection index. This assumes that the order of
      // the collection is stable across change-detection cycles.
    } else if (propertyNames === '$index') {
      // Ensure cached identity function.
      if (!cache[cacheKey]) {
        cache[cacheKey] = function trackByProperty<T>(index: number, item: T): any {
          return (index); // <---- Using INDEX.
        };
      }

      // By default, we'll use the provided item property value as the identity.
    } else {
      // Ensure cached identity function.
      if (!cache[cacheKey]) {
        cache[cacheKey] = function trackByProperty<T>(index: number, item: T): any {
          return (item[propertyNames]); // <---- Using VALUE.
        };
      }
    }
    return (cache[cacheKey]);
  }
}
