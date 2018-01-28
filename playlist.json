/**
 * Fetch Category's Playlists through the WebAPI
 * @author Loreto Parisi
 * @param NSString category_id Category Id
 * @return JSON Array of Playlists

 Optional parameters

 lmit max number of categories
 offset pagination
 country IT -  ISO 3166
 */
-(void) fetchCategoryPlaylists:(NSString*)categoryId options:(NSDictionary*)options completion:(void (^)(id results, NSError* error))completion {

    NSString *apiUrl = [NSString stringWithFormat:@"https://api.spotify.com/v1/browse/categories/%@/playlists", categoryId];
    if(options) {
        NSString *qs = [[MXMUtil sharedInstance] queryStringFromDictionary:options];
        apiUrl = [apiUrl stringByAppendingString:qs];
    }
    NSURL *url = [NSURL URLWithString:apiUrl];

    NSMutableURLRequest *urlRequest = [NSMutableURLRequest requestWithURL:url];
    NSString *headersAuth = [NSString stringWithFormat:@"Bearer %@",[self getAccessToken]];
    [urlRequest setValue:headersAuth forHTTPHeaderField:@"Authorization"];

    NSOperationQueue *queue = [[NSOperationQueue alloc] init];
    [NSURLConnection sendAsynchronousRequest:urlRequest queue:queue completionHandler:^(NSURLResponse *response, NSData *data, NSError *error) {

        if (error) {
            completion(nil,error);
        }
        else {
            NSError *err=nil;
            NSDictionary *jsonResult = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingAllowFragments error:&err];
            if( !err && [jsonResult objectForKey:@"playlists"] ) {
                //[[MXMLogger sharedLogger] debug:@"%@", jsonResult];
                NSArray *list  = [[jsonResult objectForKey:@"playlists"] objectForKey:@"items"];
                NSMutableArray *results = [[NSMutableArray alloc] init];
                for (NSDictionary *playlistObj in list) {
                    NSError *error=nil;
                    SPTPartialPlaylist *playlist = [[SPTPartialPlaylist alloc] initWithDecodedJSONObject:playlistObj error:&error];
                    if(!error) {
                        [results addObject:playlist];
                    }
                }
                completion(results,nil);
            } else {
                completion(nil,err);
            }
        }

    }];
}
