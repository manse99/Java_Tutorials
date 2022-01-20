//
//  ContentView.swift
//  Shared
//
//  Created by Gabriel Cohen on 12/31/21.
//
//

import SwiftUI

struct ContentView: View {
    @Binding var document: testDocument

    var body: some View {
        TextEditor(text: $document.text)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView(document: .constant(testDocument()))
    }
}
