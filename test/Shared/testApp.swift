//
//  testApp.swift
//  Shared
//
//  Created by Gabriel Cohen on 12/31/21.
//
//

import SwiftUI

@main
struct testApp: App {
    var body: some Scene {
        DocumentGroup(newDocument: testDocument()) { file in
            ContentView(document: file.$document)
        }
    }
}
